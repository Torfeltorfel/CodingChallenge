import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './stickyBanner.css';
import PlayIcon from './assets/PlayIcon.js';
import menImg from './assets/menImg.svg';
import cloudLargeSize from './assets/cloud.svg';
import cloudMidSize from './assets/cloudMidSize.svg';
import cloudSmallSize from './assets/cloudSmallSize.svg';

export default function StickyBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sent, setSent] = useState(false);

  async function onSubmit({ email }) {
    await postData(email);
    setSent(!sent);
  }

  async function postData(email) {
    /*  event.preventdefault(); */
    console.log('test');
    try {
      const response = await fetch(
        'https://accountablemuj3pl9f-registerbloglead.functions.fnc.fr-par.scw.cloud',
        {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bannerSection">
        <div className="bannerSection-gradient"></div>
        <div className="content">
          <img
            src={cloudSmallSize}
            alt="cloud_image"
            className="content__cloudImgTopLeft"
          />
          <img
            src={cloudMidSize}
            alt="cloud_image"
            className="content__cloudImgTopRight"
          />
          <h2 className="containerStickyBanner--headline">
            Receive 3 tax tips to start optimizing your taxes!
          </h2>

          <div className="email-container">
            <form className="emailForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                placeholder="Your email address"
                className="emailForm__input"
              ></input>
              <button type="submit" className="email__button">
                <PlayIcon />
              </button>
              {sent ? (
                <div className="emailForm__input--sent">
                  <p>You should receive an email soon!</p>
                </div>
              ) : (
                ''
              )}
            </form>
            {errors.email ? (
              <p className="emailForm__errorMessage">
                Please enter a valid email
              </p>
            ) : (
              ''
            )}
          </div>

          <img src={menImg} alt="men" className="content__menImg" />
          <img
            src={cloudLargeSize}
            alt="cloud_image"
            className="content__cloudImgBottom"
          />
        </div>
      </div>
    </>
  );
}
