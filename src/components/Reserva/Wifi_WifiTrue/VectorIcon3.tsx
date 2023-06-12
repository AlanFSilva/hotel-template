import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.6567 4.24353C17.0027 1.87558 13.5703 0.566895 10.0135 0.566895C6.45677 0.566895 3.02435 1.87558 0.370412 4.24353C0.27067 4.32873 0.188962 4.43301 0.130091 4.55023C0.0712193 4.66746 0.036372 4.79527 0.0275961 4.92615C0.0188201 5.05704 0.0362927 5.18836 0.078987 5.31239C0.121681 5.43643 0.188736 5.55068 0.276212 5.64843C0.363687 5.74619 0.469818 5.82547 0.588369 5.88163C0.70692 5.93778 0.835499 5.96968 0.96655 5.97543C1.0976 5.98119 1.22848 5.9607 1.3515 5.91516C1.47452 5.86962 1.5872 5.79995 1.68291 5.71025C3.97586 3.66527 6.94091 2.53515 10.0133 2.53515C13.0857 2.53515 16.0507 3.66527 18.3437 5.71025C18.5383 5.8843 18.7941 5.9739 19.0548 5.95935C19.3155 5.9448 19.5597 5.82729 19.7338 5.63267C19.9078 5.43805 19.9974 5.18225 19.9829 4.92156C19.9683 4.66087 19.8508 4.41664 19.6562 4.24259L19.6567 4.24353Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };