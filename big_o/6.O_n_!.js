//O(n!) - Factorial
//example

void nFacRuntimeFunc(int n) {
  for(int i=0; i<n; i++) {
    nFacRuntimeFunc(n-1);
  }
}

//adding a loop for every element
