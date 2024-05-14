import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from "react-i18next";

export default function SwiperSlides({pokemonInfo}) {
  const { t } = useTranslation();
  
  return (
    <>
      {pokemonInfo.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default ? (
        <div className="background-stats">
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.designs.g_design')}</h4>
        <hr/>
        <div className="pokemon-design-config">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={0}
            grabCursor={true}
            
            className="mySwiper"
          >
            {pokemonInfo.sprites.versions['generation-i']['red-blue'].front_transparent && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-i']['red-blue'].front_transparent}
                  alt="Generation I"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-ii'].crystal.front_transparent && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-ii'].crystal.front_transparent}
                  alt="Generation II"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-ii'].gold.front_transparent && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-ii'].gold.front_transparent}
                  alt="Generation II"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-ii'].silver.front_transparent && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-ii'].silver.front_transparent}
                  alt="Generation II"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-iii'].emerald.front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-iii'].emerald.front_default}
                  alt="Generation III"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-iv']['diamond-pearl'].front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-iv']['diamond-pearl'].front_default}
                  alt="Generation IV"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default}
                  alt="Generation IV"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-iv'].platinum.front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-iv'].platinum.front_default}
                  alt="Generation IV"
                />
              </SwiperSlide>
            )}
            {pokemonInfo.sprites.versions['generation-v']['black-white'].animated.front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-v']['black-white'].animated.front_default}
                  alt="Generation V"
                />
              </SwiperSlide>
            )}
            {/* {pokemonInfo.sprites.versions['generation-vi']['x-y'].front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-vi']['x-y'].front_default}
                  alt="Generation VI"
                />
              </SwiperSlide>
            )} */}
            {pokemonInfo.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default && (
              <SwiperSlide>
                <img
                  className='swiper-img'
                  src={pokemonInfo.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default}
                  alt="Generation VII"
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        </div>
        ) : (
          <></>
        )}
    </>
  )
}
