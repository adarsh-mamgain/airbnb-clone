// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let data = {
  data: [
    {
      place: "Candolim, India",
      distance: "750 kilometres",
      date: "4-10 Nov",
      rating: "4.95",
      price: "8,673 night",
    },
    {
      place: "Penha de França, India",
      distance: "747 kilometres",
      date: "1-6 Oct",
      rating: "4.81",
      price: "3,265 night",
    },
    {
      place: "Colva, India",
      distance: "728 kilometres",
      date: "12-17 Oct",
      rating: "5.0",
      price: "3,467 night",
    },
    {
      place: "Benaulim, India",
      distance: "727 kilometres",
      date: "1-6 Oct",
      rating: "New",
      price: "19,171 night",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(data);
}
