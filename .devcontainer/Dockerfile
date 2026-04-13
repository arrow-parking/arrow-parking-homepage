FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer \
    && chmod +x aqua-installer \
    && ./aqua-installer \
    && rm aqua-installer

ENV PATH="/home/vscode/.local/share/aquaproj-aqua/bin:${PATH}"
