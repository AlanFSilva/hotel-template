import { memo, SVGProps } from 'react';

const Rectangle130Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 280 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 0.924591H278C278.265 0.924591 278.52 1.022 278.707 1.1954C278.895 1.36879 279 1.60397 279 1.84918V46.2296C279 46.4748 278.895 46.71 278.707 46.8834C278.52 47.0568 278.265 47.1542 278 47.1542H4C3.20435 47.1542 2.44129 46.862 1.87868 46.3418C1.31607 45.8216 1 45.1161 1 44.3804V3.69837C1 2.96272 1.31607 2.2572 1.87868 1.73701C2.44129 1.21683 3.20435 0.924591 4 0.924591V0.924591Z'
      stroke='#DB8300'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Rectangle130Icon);
export { Memo as Rectangle130Icon };
