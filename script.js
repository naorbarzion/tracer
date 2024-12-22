// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Start notifications animation
function startNotificationsAnimation() {
    const notificationsTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 4
    });

    // WhatsApp notification
    notificationsTimeline
        .fromTo(".whatsapp-notification", 
            { opacity: 0, x: 50 },
            { opacity: 1, x: -20, duration: 0.8, ease: "power2.out" }
        )
        .to(".whatsapp-notification", {
            opacity: 0,
            x: 50,
            duration: 0.6,
            ease: "power2.in",
            delay: 4
        })
        // Phone notification
        .fromTo(".phone-notification",
            { opacity: 0, x: 50 },
            { opacity: 1, x: -20, duration: 0.8, ease: "power2.out", delay: 0.5 }
        )
        .to(".phone-notification", {
            opacity: 0,
            x: 50,
            duration: 0.6,
            ease: "power2.in",
            delay: 4
        });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    startNotificationsAnimation();
});
