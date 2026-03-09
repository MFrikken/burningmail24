// This endpoint defines the response displayed on the frontend
// If changes are required (i.e. number of generated subject-lines adjust this file too)

const generateSubjects =  async (req: any, res: any) => {
  // check for mailbody (block empty or only empty spaces)
  const response = await fetch("http://llm-service:5005/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mailbody: req,
      count: 3
    })
  });

  const data = await response.json();
  return data;
};
export default generateSubjects;