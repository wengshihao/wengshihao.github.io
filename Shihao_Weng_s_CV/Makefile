# Build the CV with XeLaTeX and publish it to the homepage's files/ folder.
# Two versions from the same source:
#   Shihao_Weng_CV.pdf      international version, no venue ranks (linked from the homepage)
#   Shihao_Weng_CV_CCF.pdf  domestic version with CCF venue ranks
SITE_PDF     := ../files/Shihao_Weng_CV.pdf
SITE_PDF_CCF := ../files/Shihao_Weng_CV_CCF.pdf
DEPS         := cv.tex $(wildcard fonts/*.ttf)
LATEXMK      := latexmk -xelatex -interaction=nonstopmode -halt-on-error -outdir=build

.PHONY: all clean

all: $(SITE_PDF) $(SITE_PDF_CCF)

build/cv.pdf: $(DEPS)
	$(LATEXMK) cv.tex

build/cv_ccf.pdf: $(DEPS)
	$(LATEXMK) -jobname=cv_ccf -usepretex='\def\cvccf{1}' cv.tex

$(SITE_PDF): build/cv.pdf
	cp $< $@

$(SITE_PDF_CCF): build/cv_ccf.pdf
	cp $< $@

clean:
	rm -rf build
