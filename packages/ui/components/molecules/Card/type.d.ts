declare type Card = {
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary';
  icon: string;
  username: string;
  img: string;
  description?: string;
  caption: string;
};
