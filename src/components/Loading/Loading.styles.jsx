import styled from "styled-components";

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #15133c;
  position: relative;

  .loading {
    color: #fff;
    display: inline-block;
    position: relative;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin-top: 30px;
  }

  .loading::after {
    content: "";
    width: 5px;
    height: 5px;
    background: currentColor;
    position: absolute;
    bottom: 10px;
    right: -5px;
    box-sizing: border-box;
    animation: loadingloader 1s linear infinite;
  }

  @keyframes loadingloader {
    0% {
      box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 10px 0 white, 20px 0 white;
    }
  }

  .loader {
    width: 32px;
    height: 90px;
    transform: scale(2);
    display: block;
    margin: 20px auto;
    position: relative;
    border-radius: 50% 50% 0 0;
    border-bottom: 10px solid #ff3d00;
    background-color: #fff;
    background-image: radial-gradient(
        ellipse at center,
        #fff 34%,
        #ff3d00 35%,
        #ff3d00 54%,
        #fff 55%
      ),
      linear-gradient(#ff3d00 10px, transparent 0);
    background-size: 28px 28px;
    background-position: center 20px, center 2px;
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: animloaderBack 1s linear infinite alternate;
  }
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0px 15px #ff3d00 inset;
    top: 67px;
  }
  .loader::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 34px;
    height: 34px;
    top: 112%;
    background: radial-gradient(
      ellipse at center,
      #ffdf00 8%,
      rgba(249, 62, 0, 0.6) 24%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 50% 50% 0;
    background-repeat: no-repeat;
    background-position: -44px -44px;
    background-size: 100px 100px;
    box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
    box-sizing: border-box;
    animation: animloader 1s linear infinite alternate;
  }

  @keyframes animloaderBack {
    0%,
    30%,
    70% {
      transform: translateY(0px);
    }
    20%,
    40%,
    100% {
      transform: translateY(-5px);
    }
  }

  @keyframes animloader {
    0% {
      box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
      width: 34px;
      height: 34px;
      background-position: -44px -44px;
      background-size: 100px 100px;
    }
    100% {
      box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
      width: 30px;
      height: 28px;
      background-position: -36px -36px;
      background-size: 80px 80px;
    }
  }
`;

export default LoadingWrapper;