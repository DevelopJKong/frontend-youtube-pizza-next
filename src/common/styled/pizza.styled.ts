import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'group py-4 xl:py-4 xl:px-2 rounded-xl',
})``;

export const NameWrapper = styled.div.attrs({
  className: '',
})``;

export const Name = styled.div.attrs({
  className: 'text-xl font-bold mb-3 capitalize cursor-pointer',
})``;

export const Description = styled.div.attrs({
  className: 'text-sm font-medium min-h-[60px] mb-6 bg-pink-200',
})``;

export const PriceWrapper = styled.div.attrs({
  className: 'mb-6',
})``;

export const Price = styled.div.attrs({
  className: 'hidden lg:flex text-xl font-semibold',
})``;

export const Btn = styled.button.attrs({
  className: 'hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm',
})``;
