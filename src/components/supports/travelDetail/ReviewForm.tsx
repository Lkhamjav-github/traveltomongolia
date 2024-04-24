// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import React from 'react';
// import { useUser } from '@auth0/nextjs-auth0/client';

// export const ReviewForm = () => {
//     const { user } = useUser();
//     const validation = (values: { review: string }) => {
//         let errors:{review} = {};
//         if (!user) {
//             errors.review = 'Please log in to post a review';
//         }
//         return errors;
//     }

//     const formik = useFormik({
//         initialValues: {
//             review: ''
//         },
//         validate: validation,
//         onSubmit: values => {
//             console.log(values);
//         },
//     });

//     return (
//         <div className='mt-20'>
//             <form onSubmit={formik.handleSubmit} className='flex justify-between items-center'>
//                 <div className='flex w-full flex-col gap-5'>
//                     <input
//                         id="review"
//                         name="review"
//                         type="text"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.review}
//                         className='text-start w-full border-2 shadow-xl rounded-3xl p-3 h-[200px]'
//                     />
//                     {formik.touched.review && formik.errors.review ? (
//                         <div className='text-red-500'>{formik.errors.review}</div>
//                     ) : null}
//                 </div>
//                 <div>
//                     <button type="submit" className='p-3 ml-2 rounded-xl bg-black text-white'>Post</button>
//                 </div>
//             </form>
//         </div >
//     );
// };
