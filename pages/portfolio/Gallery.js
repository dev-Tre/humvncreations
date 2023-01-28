import styles from "./carousel.module.css";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

import LeftButton from "../../public/images/leftButton.svg";
import RightButton from "../../public/images/rightButton.svg";


export default function Carousel() {
  const [index, setIndex] = useState(0);

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const array = [
    "/images/skills.png",
    "/images/1-D.jpg",
    "/images/2-D.jpg",
    "/images/3-D.jpg",
    "/images/4-D.jpg",
    "/images/5-D.jpg",
    "/images/6-D.jpg",
    "/images/7-D.jpg",
    "/images/8-D.jpg",
    "/images/9-D.jpg",
    "/images/10-D.jpg",
    "/images/Thankyou.png",
  ];
  const mobileArray = [
    "/images/skills.png",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/Thankyou.png",
  ];

  function loop(count) {
    console.log(count);
    if (count == array.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = array.length - 1);
    }
    return count;
  }

  function loopMobile(countMobile) {
    console.log(countMobile);
    if (countMobile == mobileArray.length) {
      return (countMobile = 0);
    }
    if (countMobile < 0) {
      return (countMobile = mobileArray.length - 1);
    }
    return countMobile;
  }


  const isBreakpoint = useMediaQuery(1050);

  return (
    <div className={styles.main}>
      {isBreakpoint ? (
        <>
        <button
          className={`${styles.prevMobile} ${styles.buttonMobile}`}
          onClick={() => setIndex((countMobile) => loopMobile(countMobile - 1))}
        >
          <LeftButton />
        </button>
        <button
          className={`${styles.nextMobile} ${styles.buttonMobile}`}
          onClick={() => setIndex((countMobile) => loopMobile(countMobile + 1))}
        >
          <RightButton />
        </button>
        <div className={styles.containerMobile}>
          <Image
            src={mobileArray[index]}
            fill
            alt="picture"
            style={{ objectFit: "contain" }}
            priority
          ></Image>
        </div>
      </>
      ) : (
        <>
          <button
            className={`${styles.prev} ${styles.button}`}
            onClick={() => setIndex((count) => loop(count - 1))}
          >
            <LeftButton />
          </button>
          <button
            className={`${styles.next} ${styles.button}`}
            onClick={() => setIndex((count) => loop(count + 1))}
          >
            <RightButton />
          </button>
          <div className={styles.container}>
            <Image
              src={array[index]}
              fill
              alt="picture"
              style={{ objectFit: "contain" }}
              priority
            ></Image>
          </div>
        </>
      )}
    </div>
  );
}
