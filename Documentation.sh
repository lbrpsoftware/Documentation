#!/bin/bash
# ~/bin/documentation

echo "Activating Documentation Environment..."

cat > ~/.bash_current << 'EOF'
export TF_VAR_PATH_DOCUMENTATION=~/Desktop/Documentation
EOF

source ~/.bash_current
if [[ -d "$TF_VAR_PATH_DOCUMENTATION" ]]; then
  # # Try to login using the environment variable token
  # if [[ -n "$TF_VAR_GH_TOKEN_LBRP" ]]; then
  #   echo "Logging in as $TF_VAR_GH_USER using TF_VAR_GH_TOKEN_LBRP..."
  #   echo "$TF_VAR_GH_TOKEN_LBRP" | "$GH_CLI" auth login -h github.com -p https --with-token 2>/dev/null
  #   if [[ $? -eq 0 ]]; then
  #     echo "✓ Successfully logged in as $TF_VAR_GH_USER"
  #     "$GH_CLI" auth setup-git 2>/dev/null
  #   else
  #     echo "❌ Failed to login with TF_VAR_GH_TOKEN_LBRP"
  #   fi
  # else
  #   echo "❌ TF_VAR_GH_TOKEN_LBRP environment variable not set."
  #   echo ""
  #   echo "To fix this, add the token to your .bash_profile or secrets:"
  #   echo "  export TF_VAR_GH_TOKEN_LBRP='ghp_your_personal_access_token'"
  #   echo ""
  # fi
  code "$TF_VAR_PATH_DOCUMENTATION"
fi
