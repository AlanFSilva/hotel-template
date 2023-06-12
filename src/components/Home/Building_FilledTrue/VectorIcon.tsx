import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.25 8.25H14V3C14 2.40326 13.7629 1.83097 13.341 1.40901C12.919 0.987053 12.3467 0.75 11.75 0.75H2.75C2.15326 0.75 1.58097 0.987053 1.15901 1.40901C0.737053 1.83097 0.5 2.40326 0.5 3V22.5C0.5 22.6989 0.579018 22.8897 0.71967 23.0303C0.860322 23.171 1.05109 23.25 1.25 23.25H6.125C6.22446 23.25 6.31984 23.2105 6.39017 23.1402C6.46049 23.0698 6.5 22.9745 6.5 22.875V19.5211C6.5 19.1175 6.81031 18.7711 7.21391 18.7509C7.31531 18.7461 7.41666 18.7618 7.5118 18.7972C7.60693 18.8327 7.69389 18.8871 7.76739 18.9571C7.84089 19.0271 7.8994 19.1114 7.93938 19.2047C7.97937 19.298 7.99999 19.3985 8 19.5V22.875C8 22.9745 8.03951 23.0698 8.10983 23.1402C8.18016 23.2105 8.27554 23.25 8.375 23.25H20.75C20.9489 23.25 21.1397 23.171 21.2803 23.0303C21.421 22.8897 21.5 22.6989 21.5 22.5V10.5C21.5 9.90326 21.2629 9.33097 20.841 8.90901C20.419 8.48705 19.8467 8.25 19.25 8.25V8.25ZM3.5975 20.2439C3.44217 20.2642 3.28438 20.2354 3.14627 20.1615C3.00816 20.0875 2.89667 19.9722 2.82744 19.8317C2.75822 19.6911 2.73473 19.5325 2.76028 19.3779C2.78583 19.2234 2.85914 19.0807 2.96991 18.9699C3.08068 18.8591 3.22335 18.7858 3.37791 18.7603C3.53247 18.7347 3.69114 18.7582 3.83167 18.8274C3.9722 18.8967 4.08752 19.0082 4.16145 19.1463C4.23539 19.2844 4.26422 19.4422 4.24391 19.5975C4.22247 19.7614 4.14747 19.9137 4.03057 20.0306C3.91367 20.1475 3.76142 20.2225 3.5975 20.2439V20.2439ZM3.5975 16.4939C3.44217 16.5142 3.28438 16.4854 3.14627 16.4115C3.00816 16.3375 2.89667 16.2222 2.82744 16.0817C2.75822 15.9411 2.73473 15.7825 2.76028 15.6279C2.78583 15.4734 2.85914 15.3307 2.96991 15.2199C3.08068 15.1091 3.22335 15.0358 3.37791 15.0103C3.53247 14.9847 3.69114 15.0082 3.83167 15.0774C3.9722 15.1467 4.08752 15.2582 4.16145 15.3963C4.23539 15.5344 4.26422 15.6922 4.24391 15.8475C4.22247 16.0114 4.14747 16.1637 4.03057 16.2806C3.91367 16.3975 3.76142 16.4725 3.5975 16.4939V16.4939ZM3.5975 12.7439C3.44217 12.7642 3.28438 12.7354 3.14627 12.6615C3.00816 12.5875 2.89667 12.4722 2.82744 12.3317C2.75822 12.1911 2.73473 12.0325 2.76028 11.8779C2.78583 11.7234 2.85914 11.5807 2.96991 11.4699C3.08068 11.3591 3.22335 11.2858 3.37791 11.2603C3.53247 11.2347 3.69114 11.2582 3.83167 11.3274C3.9722 11.3967 4.08752 11.5082 4.16145 11.6463C4.23539 11.7844 4.26422 11.9422 4.24391 12.0975C4.22247 12.2614 4.14747 12.4137 4.03057 12.5306C3.91367 12.6475 3.76142 12.7225 3.5975 12.7439V12.7439ZM3.5975 8.99391C3.44217 9.01422 3.28438 8.98539 3.14627 8.91145C3.00816 8.83752 2.89667 8.7222 2.82744 8.58167C2.75822 8.44114 2.73473 8.28247 2.76028 8.12791C2.78583 7.97335 2.85914 7.83068 2.96991 7.71991C3.08068 7.60914 3.22335 7.53583 3.37791 7.51028C3.53247 7.48473 3.69114 7.50822 3.83167 7.57744C3.9722 7.64667 4.08752 7.75816 4.16145 7.89627C4.23539 8.03438 4.26422 8.19217 4.24391 8.3475C4.22247 8.51142 4.14747 8.66367 4.03057 8.78057C3.91367 8.89747 3.76142 8.97247 3.5975 8.99391V8.99391ZM3.5975 5.24391C3.44217 5.26422 3.28438 5.23539 3.14627 5.16145C3.00816 5.08752 2.89667 4.9722 2.82744 4.83167C2.75822 4.69114 2.73473 4.53247 2.76028 4.37791C2.78583 4.22335 2.85914 4.08068 2.96991 3.96991C3.08068 3.85914 3.22335 3.78583 3.37791 3.76028C3.53247 3.73473 3.69114 3.75822 3.83167 3.82744C3.9722 3.89667 4.08752 4.00816 4.16145 4.14627C4.23539 4.28438 4.26422 4.44217 4.24391 4.5975C4.22247 4.76142 4.14747 4.91367 4.03057 5.03057C3.91367 5.14747 3.76142 5.22247 3.5975 5.24391V5.24391ZM7.3475 16.4939C7.19217 16.5142 7.03438 16.4854 6.89627 16.4115C6.75816 16.3375 6.64667 16.2222 6.57744 16.0817C6.50822 15.9411 6.48473 15.7825 6.51028 15.6279C6.53583 15.4734 6.60914 15.3307 6.71991 15.2199C6.83068 15.1091 6.97335 15.0358 7.12791 15.0103C7.28247 14.9847 7.44114 15.0082 7.58167 15.0774C7.7222 15.1467 7.83752 15.2582 7.91145 15.3963C7.98539 15.5344 8.01422 15.6922 7.99391 15.8475C7.97247 16.0114 7.89747 16.1637 7.78057 16.2806C7.66367 16.3975 7.51142 16.4725 7.3475 16.4939V16.4939ZM7.3475 12.7439C7.19217 12.7642 7.03438 12.7354 6.89627 12.6615C6.75816 12.5875 6.64667 12.4722 6.57744 12.3317C6.50822 12.1911 6.48473 12.0325 6.51028 11.8779C6.53583 11.7234 6.60914 11.5807 6.71991 11.4699C6.83068 11.3591 6.97335 11.2858 7.12791 11.2603C7.28247 11.2347 7.44114 11.2582 7.58167 11.3274C7.7222 11.3967 7.83752 11.5082 7.91145 11.6463C7.98539 11.7844 8.01422 11.9422 7.99391 12.0975C7.97247 12.2614 7.89747 12.4137 7.78057 12.5306C7.66367 12.6475 7.51142 12.7225 7.3475 12.7439V12.7439ZM7.3475 8.99391C7.19217 9.01422 7.03438 8.98539 6.89627 8.91145C6.75816 8.83752 6.64667 8.7222 6.57744 8.58167C6.50822 8.44114 6.48473 8.28247 6.51028 8.12791C6.53583 7.97335 6.60914 7.83068 6.71991 7.71991C6.83068 7.60914 6.97335 7.53583 7.12791 7.51028C7.28247 7.48473 7.44114 7.50822 7.58167 7.57744C7.7222 7.64667 7.83752 7.75816 7.91145 7.89627C7.98539 8.03438 8.01422 8.19217 7.99391 8.3475C7.97247 8.51142 7.89747 8.66367 7.78057 8.78057C7.66367 8.89747 7.51142 8.97247 7.3475 8.99391V8.99391ZM7.3475 5.24391C7.19217 5.26422 7.03438 5.23539 6.89627 5.16145C6.75816 5.08752 6.64667 4.9722 6.57744 4.83167C6.50822 4.69114 6.48473 4.53247 6.51028 4.37791C6.53583 4.22335 6.60914 4.08068 6.71991 3.96991C6.83068 3.85914 6.97335 3.78583 7.12791 3.76028C7.28247 3.73473 7.44114 3.75822 7.58167 3.82744C7.7222 3.89667 7.83752 4.00816 7.91145 4.14627C7.98539 4.28438 8.01422 4.44217 7.99391 4.5975C7.97247 4.76142 7.89747 4.91367 7.78057 5.03057C7.66367 5.14747 7.51142 5.22247 7.3475 5.24391V5.24391ZM11.0975 20.2439C10.9422 20.2642 10.7844 20.2354 10.6463 20.1615C10.5082 20.0875 10.3967 19.9722 10.3274 19.8317C10.2582 19.6911 10.2347 19.5325 10.2603 19.3779C10.2858 19.2234 10.3591 19.0807 10.4699 18.9699C10.5807 18.8591 10.7234 18.7858 10.8779 18.7603C11.0325 18.7347 11.1911 18.7582 11.3317 18.8274C11.4722 18.8967 11.5875 19.0082 11.6615 19.1463C11.7354 19.2844 11.7642 19.4422 11.7439 19.5975C11.7225 19.7614 11.6475 19.9137 11.5306 20.0306C11.4137 20.1475 11.2614 20.2225 11.0975 20.2439V20.2439ZM11.0975 16.4939C10.9422 16.5142 10.7844 16.4854 10.6463 16.4115C10.5082 16.3375 10.3967 16.2222 10.3274 16.0817C10.2582 15.9411 10.2347 15.7825 10.2603 15.6279C10.2858 15.4734 10.3591 15.3307 10.4699 15.2199C10.5807 15.1091 10.7234 15.0358 10.8779 15.0103C11.0325 14.9847 11.1911 15.0082 11.3317 15.0774C11.4722 15.1467 11.5875 15.2582 11.6615 15.3963C11.7354 15.5344 11.7642 15.6922 11.7439 15.8475C11.7225 16.0114 11.6475 16.1637 11.5306 16.2806C11.4137 16.3975 11.2614 16.4725 11.0975 16.4939V16.4939ZM11.0975 12.7439C10.9422 12.7642 10.7844 12.7354 10.6463 12.6615C10.5082 12.5875 10.3967 12.4722 10.3274 12.3317C10.2582 12.1911 10.2347 12.0325 10.2603 11.8779C10.2858 11.7234 10.3591 11.5807 10.4699 11.4699C10.5807 11.3591 10.7234 11.2858 10.8779 11.2603C11.0325 11.2347 11.1911 11.2582 11.3317 11.3274C11.4722 11.3967 11.5875 11.5082 11.6615 11.6463C11.7354 11.7844 11.7642 11.9422 11.7439 12.0975C11.7225 12.2614 11.6475 12.4137 11.5306 12.5306C11.4137 12.6475 11.2614 12.7225 11.0975 12.7439V12.7439ZM11.0975 8.99391C10.9422 9.01422 10.7844 8.98539 10.6463 8.91145C10.5082 8.83752 10.3967 8.7222 10.3274 8.58167C10.2582 8.44114 10.2347 8.28247 10.2603 8.12791C10.2858 7.97335 10.3591 7.83068 10.4699 7.71991C10.5807 7.60914 10.7234 7.53583 10.8779 7.51028C11.0325 7.48473 11.1911 7.50822 11.3317 7.57744C11.4722 7.64667 11.5875 7.75816 11.6615 7.89627C11.7354 8.03438 11.7642 8.19217 11.7439 8.3475C11.7225 8.51142 11.6475 8.66367 11.5306 8.78057C11.4137 8.89747 11.2614 8.97247 11.0975 8.99391V8.99391ZM11.0975 5.24391C10.9422 5.26422 10.7844 5.23539 10.6463 5.16145C10.5082 5.08752 10.3967 4.9722 10.3274 4.83167C10.2582 4.69114 10.2347 4.53247 10.2603 4.37791C10.2858 4.22335 10.3591 4.08068 10.4699 3.96991C10.5807 3.85914 10.7234 3.78583 10.8779 3.76028C11.0325 3.73473 11.1911 3.75822 11.3317 3.82744C11.4722 3.89667 11.5875 4.00816 11.6615 4.14627C11.7354 4.28438 11.7642 4.44217 11.7439 4.5975C11.7225 4.76142 11.6475 4.91367 11.5306 5.03057C11.4137 5.14747 11.2614 5.22247 11.0975 5.24391V5.24391ZM19.8125 21.75H14V9.75H19.25C19.4489 9.75 19.6397 9.82902 19.7803 9.96967C19.921 10.1103 20 10.3011 20 10.5V21.5625C20 21.6122 19.9802 21.6599 19.9451 21.6951C19.9099 21.7302 19.8622 21.75 19.8125 21.75Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };