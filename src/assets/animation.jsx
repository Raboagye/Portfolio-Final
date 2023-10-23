let easeing = [0.6, -0.05, 0.01, 0.99]

    const stagger = {
        animate: {
            transition: {
                delayChildren: 0.02,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }

    const fadeInUp = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {
                duration: 0.6, ease: easeing
            }
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: easeing
            }
        }

    }

    const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

    const firstName = {
        initial: {
            y: -20
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.04,
                staggerDirection: -1
            }

        }
    }
    const lastName = {
        initial: {
            y: -20
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.04,
                staggerDirection: 1
            }

        }
    }

    const letter = {
        initial: {
            y: 400
        },
        animate: {
            y: 0,
            transition: {duration: 1, ...transition}
        }
    }

    const btnGroup = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.6, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            animation: {
                duration: 0.6,
                ease: easeing
            }
        }
    }

    const star = {
        initial: {
            y: 60,
            opacity: 0,
            transition: {duration: 0.8, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            animation: {
                duration: 0.6,
                ease: easeing
            }
        }
    }
    const header = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeing
            }
        }
    }
    const header2 = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05,}
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        }
    }
    const header3 = {
        initial: {
            y: 100,
            opacity: 0,
            // scale: 0,
            // transition: {duration: 0.05,}
        },
        animate: {
            y: 0,
            opacity: 1,
            // scale: 1,
            // transition: {
            //     duration: 0.7, delay: 0.25
            // }
        }
    }
    const stagger2 = {
        animate: {
            transition: {
                delayChildren: 0.01,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }
    const stagger3 = {
        visible: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                staggerDirection: 1,
            }
        }
    }

    const nav = {
        initial: {
            // x: 50,
            // y: 30,
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5}
        },
        animate: {
            // x: 0,
            // y:0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.1,
                
            }

        }
    }

export {nav, stagger2, stagger, header, header2, star, letter, lastName, firstName, fadeInUp, btnGroup, header3, stagger3}