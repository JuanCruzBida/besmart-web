import React from 'react';
import BrandSlider from './brand-slider';
import BrandSliderTwo from './brand-slider-two';

export default function BrandThree() {
  return (
    <div className="tp-brand-3-area pb-120">
      <div className="container container-1400">
        <div className="row">
          <div className="col-xl-12">
            {/* Primer Slider */}
            <div className="tp-brand-3-slider-wrapper">
              <BrandSlider />
            </div>

            <div className="tp-brand-3-slider-wrapper mt-60">
              <BrandSliderTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}