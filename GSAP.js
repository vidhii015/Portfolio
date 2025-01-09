gsap.registerPlugin(ScrollTrigger);

function runGsap(params) {
  if (window.innerWidth > 760) {
    const tl = gsap.timeline();

    tl.from(
      "main .intro h1, main .intro p, main .intro span, main .intro button",
      {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        delay: 0.3,
      }
    );

    tl.from("main .arrow-down", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    });

    arrowDown = document.querySelector(".arrow-down");
    arrowDown.addEventListener("mouseenter", () => {
      gsap.to(arrowDown, { y: 7, duration: 0.3 });
    });

    arrowDown.addEventListener("mouseleave", () => {
      gsap.to(arrowDown, { y: -7, duration: 0.3 });
    });

    gsap.from("main .skills-section p", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .skills-section",
        start: "top 70%",
      },
    });

    gsap.from("main .skills-section .skills h1", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .skills-section",
        start: "top 70%",
      },
    });

    gsap.from("main .skills-section .skills .skill", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .skills-section",
        start: "top 70%",
      },
    });

    gsap.from("main .project-section p", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .project-section",
        start: "top 70%",
      },
    });

    gsap.from("main .project-section .projects h1", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .project-section",
        start: "top 70%",
      },
    });

    gsap.from("main .project-section .projects .project-list .project", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "main .project-section .projects .project-list .project",
        start: "top 80%",
      },
    });

    gsap.from("main .education-section p", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .education-section",
        start: "top 70%",
      },
    });

    gsap.from("main .education-section .education h1", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .education-section",
        start: "top 70%",
      },
    });

    gsap.from(
      "main .education-section .education .education-infos .education-info",
      {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "main .education-section",
          start: "top 70%",
        },
      }
    );
    gsap.from("main .certification-section p", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .certification-section",
        start: "top 70%",
      },
    });

    gsap.from("main .certification-section .certification h1", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .certification-section",
        start: "top 70%",
      },
    });

    gsap.from(
      "main .certification-section .certification .certification-infos .certification-info",
      {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "main .certification-section",
          start: "top 70%",
        },
      }
    );

    gsap.from("main .contact-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "main .contact-section",
        start: "top 70%",
      },
    });
  }
}

runGsap();
