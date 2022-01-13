"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Percentage = ({ id, handle }) => {
    return (<button id={id} name="percent" className="btn percent bg-dark on" onClick={() => handle(id)}>
      {id}%
    </button>);
};
exports.default = Percentage;
