import React from 'react';
import { useForm } from 'react-hook-form';
import './stickyBanner.css';
import PlayIcon from './assets/PlayIcon.js';
import menImg from './assets/menImg.svg';
import cloudLargeSize from './assets/cloud.svg';
import cloudMidSize from './assets/cloudMidSize.svg';
import cloudSmallSize from './assets/cloudSmallSize.svg';

export default function StickyBanner() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log({ data });

  return (
    <>
      <div className="bannerSection">
        <div className="bannerSection-gradient"></div>
        <div className="bannerSection-content">
          <img
            src={cloudSmallSize}
            alt="cloud_image"
            className="cloudImgTopLeft"
          />
          <img
            src={cloudMidSize}
            alt="cloud_image"
            className="cloudImgTopRight"
          />
          <h2 className="containerStickyBanner--headline">
            Receive 3 tax tips to start optimizing your taxes!
          </h2>
          <form className="email" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="email"
              placeholder="Your email address"
              className="email--input"
              aria-label="Email address"
            ></input>
            <button type="submit" className="email--button">
              <PlayIcon />
            </button>
          </form>
          <img src={menImg} alt="men" className="bannerSection-men" />
          <img
            src={cloudLargeSize}
            alt="cloud_image"
            className="cloudImg-bottom"
          />
        </div>
      </div>
    </>
  );
}
