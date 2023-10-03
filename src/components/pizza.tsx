'use client';

// image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
// components
import PizzaDetails from '@/components/pizza-details';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import * as S from '@/common/styled/pizza.styled';

interface IPizza {
  pizza: any;
}

const Pizza = ({ pizza }: IPizza) => {
  return (
    <S.Container>
      <Image width={270} height={270} src={pizza.image} alt={pizza.id} />
      {/* title */}
      <S.NameWrapper>
        <S.Name>{pizza.name}</S.Name>
      </S.NameWrapper>
      {/* description */}
      <S.Description>{pizza.description}</S.Description>

      {/* price & btn */}
      <S.PriceWrapper>
        {/* price -> hidden (sm) - visible (lg) */}
        <S.Price>starts {pizza.priceSm}</S.Price>
        {/* btn -> hidden (sm) - visible (lg) */}
        <S.Btn>Choose</S.Btn>
      </S.PriceWrapper>
    </S.Container>
  );
};

export default Pizza;
