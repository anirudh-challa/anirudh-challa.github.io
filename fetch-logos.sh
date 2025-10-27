#!/usr/bin/env sh
set -e
mkdir -p assets/logos
cd assets/logos || exit 1
for name in python numpy keras pytorch spacy tensorflow seaborn matplotlib huggingface pyspark aws llms computer_vision nlp kubeflow git sql bash cpp d3 airflow
do
  case "$name" in
    pyspark) slug="apachespark" ;;
    aws) slug="amazonaws" ;;
    llms) slug="openai" ;;
    computer_vision) slug="opencv" ;;
    sql) slug="mysql" ;;
    bash) slug="gnu-bash" ;;
    cpp) slug="cplusplus" ;;
    d3) slug="d3dotjs" ;;
    airflow) slug="apacheairflow" ;;
    *) slug="$name" ;;
  esac
  echo "Downloading $name → $slug ..."
  curl -fsSL "https://cdn.simpleicons.org/${slug}" -o "${name}.svg" || echo "Failed: $name"
done
echo "Done. Logos saved in assets/logos/"
