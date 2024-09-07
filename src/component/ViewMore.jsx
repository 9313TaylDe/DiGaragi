// import { useState } from "react";
// import ListaProducts from "./ListaProducts";
// import CardProduct from "./CardProduct";

// const ViewMore = () => {
//   cons[(visibleCount, setVisibleCount)] = useState(4);

//   const loadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 8);
//   };
//   return (
//     <div>
//       <div className="product-list">
//         {ListaProducts.slice(0, visibleCount).map((produto, index) => {
//           <CardProduct
//             key={index}
//             title={produto.title}
//             price={produto.price}
//             newprice={produto.newprice}
//             disccount={produto.disccount}
//             image={produto.image}
//           />;
//         })}
//       </div>
//       {visibleCount < ListaProducts.length && (
//         <button onClick={loadMore}></button>
//       )}
//     </div>
//   );
// };

// export default ViewMore;
