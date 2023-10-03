'use client';

// image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
// components
import PizzaDetails from '@/components/pizza-details';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';

interface IPizza {
  pizza: any;
}

const Container = styled.div.attrs((_props: any) => {
  return {
    className: 'group',
  };
})`
  ${tw`py-2  px-4 xl:py-4 xl:px-2 rounded-xl`}
`;

const Pizza = ({ pizza }: IPizza) => {
  return (
    <Container>
      <Image width={270} height={270} src={pizza.image} alt={pizza.id} />
      {/* title */}
      <div>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>{pizza.name}</div>
      </div>
    </Container>
  );
};

export default Pizza;
