import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    // Create a GSAP timeline for initial animations
    const tl = gsap.timeline();

    // Animate the H1 first
    tl.fromTo(
      '#animated-h1',
      { opacity: 0, y: -50 }, // Initial state
      { 
        opacity: 1, // End state for opacity
        y: 0, // End state for vertical position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

    // Animate the Left and Right SVGs together
    tl.fromTo(
      '#left-svg',
      { opacity: 0, x: -50 }, // Initial state: invisible and off-screen to the left
      { 
        opacity: 1, // End state for opacity
        x: 0, // End state for horizontal position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
      },
      '-=0.5' // Start this animation 0.5 seconds before the H1 animation finishes
    )
    .fromTo(
      '#right-svg',
      { opacity: 0, x: 50 }, // Initial state: invisible and off-screen to the right
      { 
        opacity: 1, // End state for opacity
        x: 0, // End state for horizontal position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
      },
      '-=0.75' // Start this animation 0.75 seconds before the H1 animation finishes
    );

    // Animate the Hero Description after SVGs
    tl.fromTo(
      '#hero-description',
      { opacity: 0, y: 30 }, // Initial state (starting from below the page)
      { 
        opacity: 1, // End state
        y: 0, // End position
        duration: 0.25, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

    // Animate the Waitlist Button last
    tl.fromTo(
      '#waitlist-btn',
      { opacity: 0, y: 30 }, // Initial state (starting from below the page)
      { 
        opacity: 1, // End state
        y: 0, // End position
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        delay: 0.25, // Delay before animation starts
      }
    );

    // Animate problem texts on scroll
    gsap.utils.toArray('#problem-text').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: -30 }, // Initial state (starting from above the page)
        { 
          opacity: 1, // End state
          y: 0, // End position
          duration: 0.75, // Duration of the animation
          ease: 'power3.out', // Easing function
          scrollTrigger: {
            trigger: element,
            start: 'top 60%', // Trigger when the top of the element hits 80% of the viewport height
            end: 'bottom 40%', // End when the bottom of the element hits 20% of the viewport height
            toggleActions: 'play none none reverse', // Play animation on scroll in, reverse on scroll out
          }
        }
      );
    });

    // Animate "There is an easier way" text on scroll
    gsap.fromTo(
      '#easier-way-text',
      { opacity: 0, scale: 0.8 }, // Initial state (faded and scaled down)
      { 
        opacity: 1, // End state for opacity
        scale: 1, // End state for scale
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        scrollTrigger: {
          trigger: '#easier-way-text',
          start: 'top 60%', // Trigger when the top of the element hits 80% of the viewport height
          end: 'bottom 40%', // End when the bottom of the element hits 20% of the viewport height
          toggleActions: 'play none none reverse', // Play animation on scroll in, reverse on scroll out
        }
      }
    );

    // Animate "There is a features-h2" text on scroll
    gsap.fromTo(
      '#features-h2',
      { opacity: 0, scale: 0.8 }, // Initial state (faded and scaled down)
      { 
        opacity: 1, // End state for opacity
        scale: 1, // End state for scale
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function
        scrollTrigger: {
          trigger: '#features-h2',
          start: 'top 60%', // Trigger when the top of the element hits 80% of the viewport height
          end: 'bottom 40%', // End when the bottom of the element hits 20% of the viewport height
          toggleActions: 'play none none reverse', // Play animation on scroll in, reverse on scroll out
        }
      }
    );

    // Animate rotation and fading elements
    gsap.fromTo(
      '#rotate-fade-element',
      { opacity: 0, rotation: -45 }, // Initial state (hidden and rotated)
      { 
        opacity: 1, 
        rotation: 0, 
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.rotate-fade-element',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    gsap.fromTo(
      '#scale-in-element',
      { scale: 0, opacity: 0 }, // Starting state: scaled down and invisible
      {
        scale: 1, // End state: normal size
        opacity: 1, // Fully visible
        duration: 1.5, // Duration of animation (1.2 seconds)
        ease: 'power3.out', // Smooth easing effect
        scrollTrigger: {
          trigger: '#scale-in-element', // Trigger animation when this element enters the viewport
          start: 'top bottom', // Start when the top of the element reaches 80% of the viewport
          end: 'top top', // End when the bottom of the element reaches 20% of the viewport
          toggleActions: 'play reverse play reverse', // Play animation on scroll in and reverse it on scroll out
        },
      },
      '+=0.2'
    );
      

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.easier-way-container', // Trigger the animation on the container
        start: 'top 80%', // Start when the container enters the viewport
        end: 'bottom 20%', 
        toggleActions: 'play reverse play reverse',
      },
    });
    
    // Add the first line animation
    timeline.fromTo(
      '#easier-way-text-top', // Top line
      { opacity: 0, y: 50, scale: 0.5 }, // Starting state
      { opacity: 1, y: 0, scale: 1.25, duration: 1.2, ease: 'power3.out' } // End state
    );
    
    // Add the second line animation after the first finishes
    timeline.fromTo(
      '#easier-way-text-bottom', // Bottom line
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1.25, duration: 1.2, ease: 'power3.out' },
      '+=0.2' // Delay of 0.2 seconds after the first animation
    );
    
    
    

    // Animate flipping elements
    gsap.fromTo(
      '#flip-in-element',
      { opacity: 0, rotationY: 90 }, // Hidden and flipped
      { 
        opacity: 1, 
        rotationY: 0, 
        duration: 1,
        ease: 'back.out(1.7)', // Springy effect
        scrollTrigger: {
          trigger: '.flip-in-element',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    // Animate wave elements
    gsap.fromTo(
      '.wave-element-left',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wave-element-left',
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );


    // Animate wave elements from the right
    gsap.fromTo(
      '.wave-element-right', // Change this to the class for the right-side elements
      { opacity: 0, x: 100 }, // Start position: from the right side (100px to the right)
      {
        opacity: 1,
        x: 0, // End position: element at its original position
        duration: 1.2,
        stagger: 0.1, // Stagger the animation of multiple elements
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wave-element-right', // Adjust trigger to target the right elements
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );


    gsap.fromTo(
      '#easier-way-text',
      { opacity: 0, scale: 0.8 }, // Initial state (faded and scaled down)
      { 
        opacity: 1, // End state for opacity
        scale: 1, // End state for scale
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function for smoothness
        scrollTrigger: {
          trigger: '#easier-way-text', // Target element
          start: 'top 60%', // Trigger when the top of the element hits 60% of the viewport height
          end: 'bottom 40%', // End when the bottom of the element hits 40% of the viewport height
          toggleActions: 'play none none reverse', // Actions: play animation on scroll in, reverse on scroll out
        }
      }
    );

    gsap.fromTo(
      '#easier-way-text1',
      { opacity: 0, scale: 0.8 }, // Initial state (faded and scaled down)
      { 
        opacity: 1, // End state for opacity
        scale: 1, // End state for scale
        duration: 0.75, // Duration of the animation
        ease: 'power3.out', // Easing function for smoothness
        scrollTrigger: {
          trigger: '#easier-way-text', // Target element
          start: 'top 60%', // Trigger when the top of the element hits 60% of the viewport height
          end: 'bottom 40%', // End when the bottom of the element hits 40% of the viewport height
          toggleActions: 'play none none reverse', // Actions: play animation on scroll in, reverse on scroll out
        }
      }
    );
    

    // Animate the feature cards
    const featureCards = gsap.utils.toArray('.feature-card');
    featureCards.forEach((card, index) => {
      const fromDirection = index % 2 === 0 ? -50 : 50;
      gsap.fromTo(
        card,
        { opacity: 0, x: fromDirection },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Animation for "Existing Solution" card
    gsap.fromTo(
      '#existing-solution-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#existing-solution-card',
          start: 'top 70%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for "Our Solution" card
    gsap.fromTo(
      '#our-solution-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#our-solution-card',
          start: 'top 70%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return null;
};

export default useGsapAnimations;
