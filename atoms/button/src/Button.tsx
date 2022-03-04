import styles from './Button.module.scss';

export interface ButtonProps {
  classNames?: string[];
  textContent: string;
}

export function Button({ classNames = [], textContent }: ButtonProps) {
  return (
    <button className={[styles.buttonDefault].concat(classNames).join(' ')}>
      {textContent}
    </button>
  );
}
