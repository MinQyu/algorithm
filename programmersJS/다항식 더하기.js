function solution(polynomial) {
  const polynomialArray = polynomial.split(" + ");
  const getTermOfX = (coefficientOfX) => {
    if (coefficientOfX) {
      return coefficientOfX === 1 ? "x" : coefficientOfX.toString() + "x";
    } else {
      return "";
    }
  };
  const checkPlus = (coefficientOfX, constantTerm) =>
    coefficientOfX && constantTerm ? " + " : "";
  const getTermOfConstant = (constantTerm) =>
    constantTerm ? constantTerm.toString() : "";
  const organizePolynomialArray = (polynomialArray) => {
    let coefficientOfX = 0;
    let constantTerm = 0;
    polynomialArray.forEach((term) => {
      if (term.includes("x")) {
        coefficientOfX += parseInt(term) ? parseInt(term) : 1;
      } else {
        constantTerm += parseInt(term);
      }
    });
    return [coefficientOfX, constantTerm];
  };
  const [coefficientOfX, constantTerm] =
    organizePolynomialArray(polynomialArray);
  return (
    getTermOfX(coefficientOfX) +
    checkPlus(coefficientOfX, constantTerm) +
    getTermOfConstant(constantTerm)
  );
}
