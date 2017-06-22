var INTENSITY = 200;
var isPlay = true;

(function(ns) {
  ns = ns || window;

  function ParticleSystem(ctx, width, height, intensity) {
    this.particles = [];
    intensity = intensity;
    this.addParticle = function() {
      this.particles.push(new Snow(ctx, width));
    }
    while (intensity--) {
      this.addParticle();
    }
    this.render = function() {
      ctx.save();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 0, 0, 0)';
      
      ctx.fillRect(0, 0, width, height);
      for (var i = 0, particle; particle = this.particles[i]; i++) {
        particle.render();
      }
      ctx.restore();
    }


    this.update = function() {
      for (var i = 0, particle; particle = this.particles[i]; i++) {
        particle.x += particle.vx;
        particle.y += particle.vy + 1;
        if (particle.y > height - 1) {
          particle.vx = 0;
          particle.vy = 0;
          particle.y = height;
          if (particle.killAt && particle.killAt < +new Date) this.particles.splice(i--, 1);
          else if (!particle.killAt) {
            particle.killAt = +new Date + 5000;
            this.addParticle();
          }
        }

      }
    }

  }

  function Snow(ctx, width) {
    this.vx = ((Math.random() - 0.5) * 2);
    this.vy = (Math.random() * 4) + 0.25;
    this.x = Math.floor((Math.random() * width));
    this.y = -Math.random() * 100;
    this.alpha = (Math.random() * 0.8) + 0.15;
    this.radius = Math.random() * 10;
    this.render = function() {
      var _radgrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        _radgrad.addColorStop(0, 'rgba(255,255,255,' + this.alpha + ')');
        _radgrad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = _radgrad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  ns.precCanvas = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = 728;
    var height = canvas.height = 300;
    var particleSystem = new ParticleSystem(ctx, width, height, INTENSITY);
    (function draw() {
      if(isPlay){
        requestAnimationFrame(draw);
        particleSystem.update();
        particleSystem.render();
      }
    })();

  }

})(window);

precCanvas();