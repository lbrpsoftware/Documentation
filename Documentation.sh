#!/bin/bash
# ~/bin/documentation

echo "Activating Documentation Environment..."

cat > ~/.bash_current << 'EOF'
export TF_VAR_PATH_DOCUMENTATION=~/Desktop/Documentation
EOF

source ~/.bash_current
if [[ -d "$TF_VAR_PATH_DOCUMENTATION" ]]; then
  code "$TF_VAR_PATH_DOCUMENTATION"
fi
