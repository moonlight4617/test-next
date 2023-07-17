// import { FC, useEffect, useState } from "react";
// import { usePortfolio } from "../../features/hooks/usePortfolio";
// import Image from "next/image";

// type PortfolioType = {
//   url: string;
//   image: {
//     data: {
//       attributes: {
//         formats: {
//           small: {
//             url: string;
//           }
//         }
//       }
//     }
//   };
//   name: string;
//   summary: string;
//   description: string;
//   github: string;
// };

// export const PortfolioData = (): [Array<FC>, boolean] => {
//   const [portfolioArray, setPortfolioArray] = useState<any>();
//   const [portfolioFlag, setPortfolioFlag] = useState<boolean>(false);
//   useEffect(() => {
//     usePortfolio().then((data) => {
//       if (!data) {
//         const noPortfolio = (
//           <div className="text-center mt-20">
//             <h3 className="font-bold">
//               現在表示できるポートフォリオはありません
//             </h3>
//           </div>
//         );
//         setPortfolioArray(noPortfolio);
//         return;
//       }
//       const myLoader = ({ src, width, quality }): string => {
//         return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`
//       }
//       const div = data.map((portfolio: PortfolioType, index: number) => (
//         <div
//           className="flex mt-24 animate-fade-in-left text-gray-600"
//           key={index}
//         >
//           <div className="w-1/2 overflow-hidden mr-4">
//             {portfolio.image && portfolio.image.data ? (
//               <>
//                 {/* {console.log(portfolio.image.data.attributes.formats.small.url)} */}

//                 <Image
//                   loader={myLoader}
//                   src={portfolio.image.data.attributes.formats.small.url}
//                   width="400"
//                   height="400"
//                   className="ml-auto flex-auto"
//                   alt={`portfoilo-image${index}`}
//                 />
//                 {/* <p>テスト</p> */}
//               </>
//             ) : (
//               <Image
//                 src="/images/noimage.png"
//                 width="400"
//                 height="400"
//                 className="ml-auto flex-auto"
//                 alt="no-image"
//               />
//               // <p>noimageテスト</p>
//             )}
//           </div>
//           <div className="flex-auto pl-1 w-1/2">
//             <p className="font-medium title-font text-gray-900 text-3xl">
//               {portfolio.name}
//             </p>
//             <br />
//             <table>
//               <tbody>
//                 <tr>
//                   <td>概要:</td>
//                   <td>{portfolio.summary}</td>
//                 </tr>
//                 <tr className="mt-[10rem]">
//                   <td>詳細:</td>
//                   <td>{portfolio.description}</td>
//                 </tr>
//                 <tr>
//                   <td>URL:</td>
//                   <td>
//                     <a href={portfolio.url}>{portfolio.url}</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>github:</td>
//                   <td>
//                     <a href={portfolio.github} target="_blank">{portfolio.github}</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="w-20">使用言語:</td>
//                   <td></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ));
//       setPortfolioArray(div);
//       setPortfolioFlag(true);
//     });
//   }, []);
//   return [portfolioArray, portfolioFlag]
// }
