import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function SixthSection() {
  return (
    <div className="mt-[60px] md:mt-[100px] p-4 md:p-5">
      <p className="text-[32px] md:text-[50px] font-bold text-center mb-[24px] md:mb-[40px]">
        Top Car Rental Questions
      </p>

      <div className="px-0 md:px-[20px] max-w-[900px] mx-auto">
        <Accordion
          defaultExpanded
          sx={{
            marginBottom: "16px",
            boxShadow: "none",
            border: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fontSize: { xs: 22, md: 28 } }} />}
            sx={{
              padding: { xs: "12px 16px", md: "16px 20px" },
              minHeight: { xs: "52px", md: "60px" },
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 600,
                lineHeight: 1.4,
                color: "#000",
              }}
            >
              How does it work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: { xs: "0 16px 16px", md: "0 20px 20px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.6,
                color: "#666",
              }}
            >
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
              cursus turpis nibh placerat massa. Fermentum urna ut at et in.
              Turpis aliquet cras hendrerit enim condimentum. Condimentum
              interdum risus bibendum urna. Augue aliquet varius faucibus ut
              integer tristique ut. Pellentesque id nibh sed nulla non nulla
            </Typography>
          </AccordionDetails>
        </Accordion>
        {[
          "Can I rent a car without a credit card?",
          "What are the requirements for renting a car?",
          "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
          "Does Car Rental offer coverage products for purchase with my rental?",
        ].map((title, i) => (
          <Accordion
            key={i}
            sx={{
              marginBottom: "16px",
              boxShadow: "none",
              border: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: { xs: 22, md: 28 } }} />}
              sx={{
                padding: { xs: "12px 16px", md: "16px 20px" },
                minHeight: { xs: "52px", md: "60px" },
                "& .MuiAccordionSummary-content": { margin: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: "#000",
                }}
              >
                {title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: { xs: "0 16px 16px", md: "0 20px 20px" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.6,
                  color: "#666",
                }}
              >
                Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
                cursus turpis nibh placerat massa. Fermentum urna ut at et in.
                Turpis aliquet cras hendrerit enim condimentum. Condimentum
                interdum risus bibendum urna. Augue aliquet varius faucibus ut
                integer tristique ut. Pellentesque id nibh sed nulla non nulla
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}