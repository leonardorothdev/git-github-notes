## How to Use Git: Essential Commands and Concepts

Git is a distributed version control system used to track changes in files and coordinate work among multiple people on software projects.

---

## Understanding Git Branches

When working on a Git versioned project, a **main branch** is created. This branch contains the version of the code that the client or production environment uses. Typically, this branch is named `main` or `master`.

From this main branch, you can create **feature branches** where you can make changes and test them in an isolated environment without affecting the main branch. Team members can work in parallel on different branches.

After making and testing changes, you can merge them back into the main branch using the **merge** operation.

Git uses the concept of **diffs**, saving only the differences between the previous and current versions, which optimizes storage and performance.

```
main/master -> new-change -> main/master -> another-change -> main/master
```

---

## Essential Git Commands

### Initialization and Basic Commands

```bash
git init                     # Initialize Git in your repository
git add .                    # Stage all changes for commit
git add <file>               # Stage a specific file
git commit -m "message"       # Commit staged files with a message
```

### Branching and Merging

```bash
git branch                   # Show all branches
git branch -M main           # Rename current branch to 'main'
git checkout -b new-branch   # Create and switch to a new branch
git checkout main            # Switch back to the main branch
git merge new-branch         # Merge 'new-branch' into 'main'
```

### Remote Repositories

```bash
git remote add origin <url>  # Link local repo to GitHub repository
git push -u origin main      # Push local commits to GitHub
```

> 💡 **Tip:** If you face authentication issues during push, configure SSH keys.

### Tracking Changes

```bash
git status                   # Check current branch and staged changes
git log                      # View commit history
git diff                     # Show differences between working directory and last commit
git restore <file>           # Revert file changes before commit
```

### Resetting and Reverting Commits

```bash
git log                      # Get commit ID
git revert <commit-id>       # Create a new commit that reverses changes
git reset --hard <commit-id> # Reset history to specified commit (local only)
```

### Changing Commit Messages

```bash
git commit --amend -m "New message"  # Update the last commit message
```

### Ignoring Files

Create a `.gitignore` file in your project folder and list the files/folders to ignore.

Example `.gitignore`:
```
node_modules/
dist/
.env
```

Templates: [gitignore.io](https://www.toptal.com/developers/gitignore)

---

## Collaborating with GitHub

### Forking a Repository

Forking allows you to create a personal copy of someone else's repository to your GitHub account.

**Steps to fork a repository:**
1. Navigate to the GitHub repository you want to fork.
2. Click the **Fork** button at the top right corner.
3. GitHub will create a copy under your account.
4. Clone your forked repository:

   ```bash
   git clone git@github.com:your-username/repository-name.git
   ```

### Creating a Pull Request (PR)

Pull requests are used to propose changes from your branch to the main project repository.

**Steps to create a pull request:**
1. Push your branch to your GitHub fork:

   ```bash
   git push origin branch-name
   ```

2. Navigate to your repository on GitHub.
3. Click the **Compare & pull request** button.
4. Add a descriptive title and comment about your changes.
5. Click **Create pull request**.

The project maintainers will review your PR, and after approval, they can merge your changes into the main project.

---

## Handling Merge Conflicts

Merge conflicts occur when two branches have changes in the same line of a file.

**How to resolve conflicts:**
1. Git marks the conflict area in the affected files.
2. Open the file and decide which changes to keep.
3. After resolving:

   ```bash
   git add <file>
   git commit -m "Resolve merge conflict"
   ```

---

