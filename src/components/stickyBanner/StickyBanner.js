import React from 'react';
import { useForm } from 'react-hook-form';
import './stickyBanner.css';
import PlayIcon from './assets/PlayIcon.js';
import menImg from './assets/menImg.svg';
import cloudLargeSize from './assets/cloud.svg';
import cloudMidSize from './assets/cloudMidSize.svg';
import cloudSmallSize from './assets/cloudSmallSize.svg';

export default function StickyBanner() {
  const { register, handleSubmit } = useForm();
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
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="text"
              placeholder="Your email address"
              className="email--input"
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
