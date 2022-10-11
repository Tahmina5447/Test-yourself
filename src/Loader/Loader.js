export const quizData=async()=>{
    const data=await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizes=await data.json()
    const allQuizes=quizes.data;

    return allQuizes;
}