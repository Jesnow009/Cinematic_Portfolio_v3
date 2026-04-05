/**
 * JESNOW BIJU - CINEMATIC PORTFOLIO V2.0
 * Core Showcase Data & Rendering
 * Dynamically streams from Google Drive (High Fidelity)
 */

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('showcase-app');
    if (!app) return;

    // --- YOUR CINEMATIC VIDEO REPOSITORY ---
    // All IDs are extracted from your Google Drive links for direct streaming
    const myVideos = [
        // 🚀 FEATURED HERO
        { 
          id: "hero-featured",
          src: "https://lh3.googleusercontent.com/u/0/d/12tmb_SM2iLL2DqHz-d5O0nh0gGH5auB4", 
          title: "MARCO 4K MASHUP", 
          subtitle: "Editorial Masterpiece - High Fidelity", 
          category: "Featured", 
          isHero: true 
        },

        // 🍿 MASHUP CUTS
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1oaFvOn0WImCxbYsPSxr23uR_V1Mlj7-c", 
          title: "Cinematic Mashup 2", 
          subtitle: "Dynamic Transition Mastery", 
          category: "Mashup Cuts" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1GZHjFJ52K8rS9wGRtBuckiIYcUOpp9MU", 
          title: "Cinematic Mashup 3", 
          subtitle: "High-Energy Edit", 
          category: "Mashup Cuts" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/11N0tXGcMYc7zCxbP5ppGrsVHX9rAy2Ou", 
          title: "Mashup Extra", 
          subtitle: "Bonus Cinematic Cut", 
          category: "Mashup Cuts" 
        },

        // 🌟 SPECIAL PROJECTS
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/14sHYeKnrqWRcN-0oIKkc5CFvNmjEiuBo", 
          title: "John Wick Cinematic", 
          subtitle: "The Baba Yaga - High Fidelity Edit", 
          category: "Special Projects" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/10Cq1PXILORfojx9S4DisWe3F2MrcmFPV", 
          title: "Bullet Train Mashup", 
          subtitle: "Fast-Paced Editorial Flow", 
          category: "Special Projects" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1SKELRUMSZZd0bQl4hhBv0cNLDLmeGdp9", 
          title: "Love Birds", 
          subtitle: "Emotional Visual Narrative", 
          category: "Special Projects" 
        },

        // 🎥 VIRAL VIDEOS & REELS (Vertical)
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1wk3npgZmM0IiS6DHT8pejpGxjZCPiVn5", 
          title: "Viral Reel 1", 
          subtitle: "Instagram Mastery", 
          category: "Viral Videos",
          type: "reel"
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1BK3T-pzfZ_eL8ws4bIr1WAr7LDMFlGtn", 
          title: "Viral Reel 2", 
          subtitle: "High Velocity Edit", 
          category: "Viral Videos",
          type: "reel"
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1OqnV3-i4qi6hG_MJMAfuRD5dkgDfvxOt", 
          title: "Viral Reel 3", 
          subtitle: "Dynamic Transitions", 
          category: "Viral Videos",
          type: "reel"
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1iEy3yfUU3svLQdUU3FMMqHabLL0Nfd5V", 
          title: "Viral Reel 4", 
          subtitle: "Impactful Cuts", 
          category: "Viral Videos",
          type: "reel"
        },

        // 📺 IDENTITY & INTROS
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1K_zaz5wgxUcjnveefFbz8jrdKfN07nka", 
          title: "Day with Sneha Shetty", 
          subtitle: "Professional Lifestyle Documentary", 
          category: "Identity & Intros" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/1pIORgg65yF_q7_WZ4096SvT6fic2NoGL", 
          title: "Sneha Shetty Kohl", 
          subtitle: "Cinematic Identity Showcase", 
          category: "Identity & Intros" 
        },
        { 
          src: "https://lh3.googleusercontent.com/u/0/d/18htlZ6XbaYzpaaQUphfiG0ko25kGs1ex", 
          title: "Vijaya Raghavendra", 
          subtitle: "Celebrity Portfolio Montage", 
          category: "Identity & Intros" 
        }
    ];

    // --- 🎭 DYNAMIC RENDERING ENGINE ---
    let html = '';

    // 1. Build Hero Section
    const hero = myVideos.find(v => v.isHero);
    if (hero) {
        html += `
            <div class="showcase-hero" style="background: #000; position: relative;">
                <video src="${hero.src}" autoplay loop muted playsinline class="hero-video-bg" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6; filter: brightness(0.7);"></video>
                <div class="hero-overlay" style="position: absolute; bottom: 15%; left: 5%; z-index: 10;">
                    <div class="hero-badge" style="background: #e50914; color: #fff; padding: 4px 12px; border-radius: 4px; font-weight: 800; font-size: 0.8rem; margin-bottom: 1rem; display: inline-block;">FEATURED CINEMATIC EDIT</div>
                    <h1 style="font-size: 5rem; font-weight: 900; line-height: 0.9; margin-bottom: 1rem; text-transform: uppercase; font-family: var(--font-heading);">${hero.title}</h1>
                    <p style="font-size: 1.4rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">${hero.subtitle}</p>
                    <div style="display: flex; gap: 1rem;">
                        <button class="btn btn-primary" onclick="this.closest('.showcase-hero').requestFullscreen()" style="padding: 1.2rem 3.5rem; border-radius: 30px;">Play Fullscreen</button>
                    </div>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 200px; background: linear-gradient(to top, #08020d, transparent); z-index: 5;"></div>
            </div>
        `;
    }

    html += `<div class="showcase-rows-container" style="padding: 60px 0;">`;

    // 2. Build Category Rows with Sliders
    const rowVideos = myVideos.filter(v => !v.isHero);
    const categories = ["Mashup Cuts", "Special Projects", "Viral Videos", "Identity & Intros"];

    function renderCard(video) {
        const isReel = video.type === 'reel';
        const cardClass = isReel ? "showcase-card vertical" : "showcase-card horizontal";
        return `
            <div class="${cardClass} reveal">
                <div class="project-img custom-player" data-behavior="hover">
                    <video src="${video.src}" loop muted playsinline class="video-element"></video>
                    <button class="center-play-btn" aria-label="Play"><svg viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                    <div class="player-controls">
                        <div class="progress-container"><input type="range" class="progress-bar" min="0" max="100" value="0" step="0.1"></div>
                        <div class="controls-main">
                            <div class="controls-left">
                                <button class="control-btn play-pause-btn"><svg width="20" height="20" class="icon-play" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                <div class="volume-container">
                                    <button class="control-btn mute-btn"><svg width="20" height="20" class="icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg></button>
                                </div>
                            </div>
                            <div class="controls-right">
                                <button class="control-btn fullscreen-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-metadata" style="padding: 15px 5px;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 5px; color: #fff;">${video.title}</h3>
                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">${video.subtitle}</p>
                </div>
            </div>
        `;
    }

    categories.forEach(cat => {
        const matchingVideos = rowVideos.filter(v => v.category === cat);
        if (matchingVideos.length === 0) return;

        html += `
            <div class="showcase-row reveal" style="margin-bottom: 80px;">
                <h2 class="row-title" style="margin-left: 5%; font-size: 2.2rem; margin-bottom: 30px; font-weight: 800; text-transform: uppercase;">${cat}</h2>
                <div class="slider-wrapper">
                    <button class="slider-arrow left-arrow" aria-label="Scroll Left">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <div class="row-slider" id="row-${cat.replace(/\s+/g, '-').toLowerCase()}">
                        <div class="slider-track" style="display: flex; gap: 25px; padding: 20px 5%;">
                            ${matchingVideos.map(v => renderCard(v)).join('')}
                        </div>
                    </div>
                    <button class="slider-arrow right-arrow" aria-label="Scroll Right">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    app.innerHTML = html;

    // --- RE-INITIALIZE CUSTOM PLAYERS & SLIDERS ---
    if (window.initCustomVideoPlayers) window.initCustomVideoPlayers();
});
