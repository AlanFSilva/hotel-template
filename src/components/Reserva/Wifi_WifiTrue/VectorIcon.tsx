import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.24951 2.26414C8.08255 1.22681 6.57549 0.653809 5.01412 0.653809C3.45276 0.653809 1.94569 1.22681 0.778734 2.26414C0.680126 2.34946 0.599454 2.45353 0.541403 2.57029C0.483352 2.68706 0.449078 2.81419 0.440573 2.94431C0.432067 3.07443 0.4495 3.20495 0.491857 3.32828C0.534215 3.4516 0.600654 3.56529 0.687315 3.66272C0.773976 3.76016 0.879132 3.8394 0.996676 3.89586C1.11422 3.95231 1.24181 3.98485 1.37204 3.99158C1.50226 3.99831 1.63252 3.97911 1.75526 3.93507C1.878 3.89104 1.99077 3.82306 2.08701 3.73507C2.89355 3.01826 3.93508 2.62231 5.01412 2.62231C6.09317 2.62231 7.1347 3.01826 7.94123 3.73507C8.13642 3.90856 8.39252 3.99741 8.65321 3.98207C8.9139 3.96673 9.15782 3.84846 9.33131 3.65328C9.5048 3.4581 9.59365 3.20199 9.57831 2.9413C9.56297 2.68061 9.4447 2.43669 9.24951 2.2632V2.26414Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };