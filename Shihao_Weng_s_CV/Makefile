# Build the CV with XeLaTeX and publish it to the homepage's files/ folder.
SITE_PDF := ../files/Shihao_Weng_CV.pdf

.PHONY: all clean

all: $(SITE_PDF)

build/cv.pdf: cv.tex $(wildcard fonts/*.ttf)
	latexmk -xelatex -interaction=nonstopmode -halt-on-error -outdir=build cv.tex

$(SITE_PDF): build/cv.pdf
	cp $< $@

clean:
	rm -rf build
