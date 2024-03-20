import React from 'react';
import styled from 'styled-components';

import clock from '../../assets/icons/clock.svg';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 0 5px;
  column-gap: 28px;
  background-color: #fff;

  .sale {
    color: #2d3242;
    font-weight: 700;
    font-size: 30px;
    font-family: "PT Root UI", sans-serif;
    line-height: 130%;
  }

  .time {
    display: flex;
    flex-direction: column;

    &__counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 170px;

      img {
        width: 8px;
      }
    }

    &__count {
      color: #01b9c5;
      font-weight: 700;
      font-size: 60px;
      font-family: "Bebas Neue", sans-serif;
      line-height: 103%;
    }

    &__type {
      display: flex;
      justify-content: space-between;
      text-align: center;

      .type {
        color: #818798;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <p className="sale">Скидка действует:</p>
      <div className="time">
        <div className="time__counter">
          <div className="time__count">
            09
          </div>
          <img src={clock} alt="time" />
          <div className="time__count">
            09
          </div>
        </div>
        <div className="time__type">
          <div className="type">минут</div>
          <div className="type">секунд</div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
