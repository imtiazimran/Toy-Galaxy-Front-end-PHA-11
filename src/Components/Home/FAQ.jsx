import { Accordion } from 'flowbite-react';

const FAQ = () => (
  <div className='py-5'>
  <Accordion>
    <Accordion.Panel>
      <Accordion.Title>What superhero toys do you offer?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          We offer a wide range of superhero toys, including action figures, collectibles, costumes, and more. You can find your favorite superheroes from popular franchises like Marvel and DC Comics.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Do you have toys for all ages?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, we have superhero toys suitable for all ages, from kids to adults. Whether you're looking for toys for play or collectibles, we have something for everyone.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>How can I place an order?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Placing an order is easy. Simply browse our selection, add the items you want to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>What payment methods do you accept?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          We accept various payment methods, including credit/debit cards, PayPal, and more. You can choose the payment option that suits you best during checkout.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Can I return or exchange items?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          We have a return and exchange policy. If you're not satisfied with your purchase, you can contact our customer support for assistance with returns or exchanges.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
  </div>
);

export default FAQ;
