const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: 'numeric',
  }); //
}

const capitalizeSentence = (input: string): string => {
  const words = input.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  return words.join(" ")
}

export { formatDate, capitalizeSentence }