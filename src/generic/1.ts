// function getPromise(): Promise<Array<string | number>> {
// function getPromise(): Promise<[string, number]> {
function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
