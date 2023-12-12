import '../../style.css';

const CombLock = () => {
  return (
    <div className="p-2 border-dark-subtle border border-5 rounded-3">
      <div className="d-flex flex-column align-items-center">
        <h4>Combination Lock</h4>
        <div className="border border-3 border-dark-subtle input-display">TEST TEST TEST</div>
      </div>
      <div className="d-flex flex-column gap-1 mt-3">
        <div className="d-flex gap-1">
          <button className="btn-combo-lock rounded-2">9</button>
          <button className="btn-combo-lock rounded-2">8</button>
          <button className="btn-combo-lock rounded-2">7</button>
        </div>
        <div className="d-flex gap-1">
          <button className="btn-combo-lock rounded-2">6</button>
          <button className="btn-combo-lock rounded-2">5</button>
          <button className="btn-combo-lock rounded-2">4</button>
        </div>
        <div className="d-flex gap-1">
          <button className="btn-combo-lock rounded-2">3</button>
          <button className="btn-combo-lock rounded-2">2</button>
          <button className="btn-combo-lock rounded-2">1</button>
        </div>
        <div className="d-flex gap-1">
          <button className="btn-combo-lock rounded-2">&lt;</button>
          <button className="btn-combo-lock rounded-2">0</button>
          <button className="btn-combo-lock rounded-2">E</button>
        </div>
      </div>
    </div>
  );
};

export default CombLock;