import React from "react";

type Props = {
  closeModal: () => void;
};

export const Title = ({ closeModal }: Props) => {
  return (
    <div className="md:mt-20 md:ml-28 animate-fade-in-left ml-8" onClick={closeModal}>
      <p>ポートフォリオ集</p>
      <p className="md:text-4xl text-2xl">Ryoji's Works</p>
    </div>
  );
};
