import styles from "./carousel.module.css";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

import LeftButton from "../../public/images/leftButton.svg";
import LeftButtonHover from "../../public/images/leftButtonHover.svg";
import RightButton from "../../public/images/rightButton.svg";
import RightButtonHover from "../../public/images/rightButtonHover.svg";

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
    "/images/1-D.png",
    "/images/2-D.png",
    "/images/3-D.png",
    "/images/4-D.png",
    "/images/5-D.png",
    "/images/6-D.png",
    "/images/7-D.png",
    "/images/8-D.png",
    "/images/9-D.png",
    "/images/10-D.png",
    "/images/Thankyou.png",
  ];
  const mobileArray = [
    "/images/skills.png",
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.png",
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
    "/images/17.png",
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
            ></Image>
          </div>
        </>
      )}
    </div>
  );
}
