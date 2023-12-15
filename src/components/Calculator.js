// src/components/Calculator.js
import React from 'react';
import { connect } from 'react-redux';
import { tambahAngka, kurangAngka } from '../redux/actions';

const Calculator = ({ hasil, tambahAngka, kurangAngka }) => {
  const handleTambah = () => {
    tambahAngka(1);
  };

  const handleKurang = () => {
    if (hasil > 0) {
      kurangAngka(1);
    }
  };

  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={handleTambah}>Tambah 1</button>
      <button onClick={handleKurang}>Kurang 1</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hasil: state.hasil,
});

const mapDispatchToProps = {
  tambahAngka,
  kurangAngka,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
