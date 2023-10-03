'use client';

// image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
// components
import PizzaDetails from '@/components/pizza-details';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

interface IPizza {
  pizza: any;
}

// ! styled components
const Container = styled.div.attrs({
  className: 'group py-4 xl:py-4 xl:px-2 rounded-xl',
})``;

const NameWrapper = styled.div.attrs({
  className: '',
})``;

const Name = styled.div.attrs({
  className: 'text-xl font-bold mb-3 capitalize cursor-pointer',
})``;

const Description = styled.div.attrs({
  className: 'text-sm font-medium min-h-[60px] mb-6 bg-pink-200',
})``;

const PriceWrapper = styled.div.attrs({
  className: 'mb-6',
})``;

const Price = styled.div.attrs({
  className: 'hidden lg:flex text-xl font-semibold',
})``;

const Btn = styled.button.attrs({
  className: 'hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm',
})``;

const Pizza = ({ pizza }: IPizza) => {
  return (
    <Container>
      <Image width={270} height={270} src={pizza.image} alt={pizza.id} />
      {/* title */}
      <NameWrapper>
        <Name>{pizza.name}</Name>
      </NameWrapper>
      {/* description */}
      <Description>{pizza.description}</Description>

      {/* price & btn */}
      <PriceWrapper>
        {/* price -> hidden (sm) - visible (lg) */}
        <Price>starts {pizza.priceSm}</Price>
        {/* btn -> hidden (sm) - visible (lg) */}
        <Btn>Choose</Btn>
      </PriceWrapper>
    </Container>
  );
};

export default Pizza;
