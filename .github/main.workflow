workflow "Run Tests" {
  on = "push"
  resolves = ["Test"]
}

action "Yarn Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
  args = "install"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Yarn Install"]
  runs = "yarn"
  args = "test"
}
