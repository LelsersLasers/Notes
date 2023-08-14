# Biotech notes


## CRISPR

- CRISPR: Clustered Regularly Interspaced Short Palindromic Repeats
	- Normal function: defense against viruses
		- Viruses have DNA that is not like ours
		- CRISPR cuts out/destroys the virus DNA
	- gRNA: guide RNA
		- RNA that binds to the virus DNA
		- Made from:
			- 1x repeated sequence - "scaffold" sequence
			- 1x unique sequence that originates from space between repeated sequences - "protospacer"
				- Often 20 nucleotides long (4^20 = basically no repeats)
	- Cas9:
		- Protein that binds to gRNA
			- Looking for a specific sequence, the repeated/"scaffold" sequence
			- Different Cas9s bind slightly differently
		- Works as a immune system
			- If it finds the repeated sequence/gRNA, it cuts the DNA (breaking it)
- CAS: CRISPR-associated protein
	- Cas9 is a protein
	- On the dna, after the CRISPR array, there is a large amount of dna encoding or proteins
- CRISPR as scissors
	- Adding Cas9 + ("scaffold" sequence + unique sequence) = scissors
	- Basically flags an area of DNA as damaged
- CRISPR as change
	- Cas9 isnt everything, one more step afterwards (exceot for bacteria)
	- Next step: DNA repair
		- Cutting the DNA causes a panic
			- NHEJ: Non-homologous end joining
				- DNA repair that joins the ends of the DNA
				- Not very accurate, sloppy
					- Leads to mutations
			- HDR: Homologous directed repair
				- gRNA + Cas9 + correct DNA sequence ("template")
				- Swaps out the incorrect DNA sequence for the correct one
					- Very accurate, but slow
- Why isn't it perfect? Cas9 is sloppy, had to give to all the cells, and people generate immunity
- To use:
	- DNA for the gRNA
	- DNA for the Cas9
	- (Put on a plasmid)

## PCR

- PCR: Polymerase Chain Reaction
	- Good for amplifying/replicating DNA
- General steps:
	- Denature: heat up to separate the strands
		- Raise temp to 95 C
	- Anneal: cool down to allow the primers to bind to the DNA
		- Lower temp to 55 C
		- Primers complementary match to the DNA
	- Extend: add DNA polymerase to extend the primers
		- Raise temp to 72 C
		- Taq polymerase adds nucleotides to the primers
- On the first cycle, Taq doesn't stop, it just keeps adding nucleotides
	- On the second cycle, Taq stops at the end of the opposite primer
- Cycles are exponetial
	- Doubles the amount of DNA each cycle
- Issue of contamination
	- Super sensitive

## Restriction Enzymes

- Cut DNA at specific sequences
	- Always cuts at the same sequence
		- While Cas9 is a programmable scissors
	- Mostly cuts at palindromic sequences
		- The complementary sequence is the same as the original sequence if it is reversed
- Leaves sticky ends
	- Cuts the phosphodiester bonds in the DNA backbone
	- Overhang labelled by the end of the longer sequence
- To glue DNA together:
	- Have to have the same overhangs
		- Not nessicarily the same restriction enzyme, but the same sequence and direction of the overhang
- Sticy ends stickier: more Cs and Gs
	- More Gs and Cs = more hydrogen bonds
	- More hydrogen bonds = more sticky
- Glued together by DNA ligase

## Gel Electrophoresis

- Gel electrophoresis: separates DNA fragments by size
	- DNA fragments are negatively charged (phosphate groups on the backbone)
	- DNA fragments move towards the positive electrode
	- DNA fragments move faster if they are smaller
- Gel: Agarose
	- Crosses with holes
	- Put it in a "bath" so DNA can move
- Ladder: DNA fragments of known size
	- Used to compare the size of the DNA fragments
- See the DNA with dye that flouresces under UV light
- Gel electrophoresis as purification
	- Cut out the section of the gel containing the DNA fragment of interest and melt off the agarose

## Transcription

- Put the DNA plasmid into the bacteria
- Heat shock the bacteria to break open the cell wall
	- Can take up the plasmid
- The bacteria will treat the plasmid as its own DNA
	- Transcribe the DNA into RNA, translate the RNA into protein
	- The bacteria will make the proteins encoded by the plasmid
- Filtering:
	- Beforehand, added antibiotic resistance gene to the plasmid
	- Put on the bacteria on a plate with the antibiotic
	- Only the bacteria that took up the plasmid will survive
- Mini-prep:
	- Put bacteria into a tube
	- Put it through something where only the DNA will bind
	- Only DNA (the plasmid) remains
	- Sequence the DNA and see if it has the gene of interest on the plasmid

## Cloning (disambiguation)

1. Making a plasmid
2. Or cloning an entire animal

## Cloning (an animal)

- Pluripotent stem cells
	- Can become any cell/tissue
	- Not (really) found in adults
- Totipotent stem cells
	- Can become any cell and a whole organism
- Reprogramming: any somatic cell can be turned into a pluripotent by over expressing certain genes
	- 4 genes: OSKM (Yamanaka factors)
	- iPSCs: induced pluripotent stem cells
		- Last/grow forever
- Differenciation: it is known the steps to turn a pluripotent stem cell into a specific cell
- SCNT: somatic cell nuclear transfer
	- Dolly the sheep
	- Take the nucleus from a somatic cell and put it into an egg which has had its nucleus removed
	- The cytoplasm of the egg will reprogram the nucleus into an egg
		- Not completely perfect
	- This process is hard, and doesn't always work perfectly