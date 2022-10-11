export const quizData=async()=>{
    const data=await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizes=await data.json()
    const allQuizes=quizes.data;

    return allQuizes;
}
// export const quizDetails=async()=>{
//     const detailsData=await fetch('')
//     const details=await detailsData.json()
//     return details;
// }