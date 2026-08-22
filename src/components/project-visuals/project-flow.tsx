import styles from "./project-flow.module.css";

export type ProjectFlowStep = {
  label: string;
  detail: string;
};

export type ProjectFlowProps = {
  title: string;
  caption: string;
  steps: readonly ProjectFlowStep[];
  className?: string;
};

export function ProjectFlow({
  title,
  caption,
  steps,
  className,
}: ProjectFlowProps) {
  const figureClassName = className
    ? `${styles.figure} ${className}`
    : styles.figure;
  const flowClassName = [
    styles.flow,
    steps.length === 3 ? styles.threeSteps : styles.fourSteps,
  ].join(" ");

  return (
    <figure className={figureClassName} aria-label={`${title} architecture`}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>System path</span>
        <span className={styles.title}>{title}</span>
      </div>

      <ol className={flowClassName}>
        {steps.map((step, index) => (
          <li className={styles.step} key={step.label}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.stepLabel}>{step.label}</span>
            <span className={styles.stepDetail}>{step.detail}</span>
          </li>
        ))}
      </ol>

      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

const autohilSteps = [
  {
    label: "Python test runner",
    detail: "Test orchestration",
  },
  {
    label: "USB serial",
    detail: "Command and telemetry transport",
  },
  {
    label: "STM32 command/fault/sensor modules",
    detail: "Target firmware",
  },
  {
    label: "JSON result/report",
    detail: "Pass/fail evidence",
  },
] as const satisfies readonly ProjectFlowStep[];

const fpgaSteps = [
  {
    label: "MMIO registers",
    detail: "Register transactions",
  },
  {
    label: "UART TX/RX + RX FIFO",
    detail: "Peripheral datapath",
  },
  {
    label: "cocotb regression/waveforms",
    detail: "Cycle-level verification",
  },
] as const satisfies readonly ProjectFlowStep[];

const telemetrySteps = [
  {
    label: "C firmware",
    detail: "Sensors, faults, and commands",
  },
  {
    label: "UART JSON packets",
    detail: "Newline-delimited transport",
  },
  {
    label: "Python parser/logger",
    detail: "Host capture and persistence",
  },
  {
    label: "Statistics and report",
    detail: "Reviewable output",
  },
] as const satisfies readonly ProjectFlowStep[];

export function AutoHilFlow({ className }: { className?: string }) {
  return (
    <ProjectFlow
      className={className}
      title="AutoHIL Validation Bench"
      caption="Commands move from the Python runner to the STM32 target; structured results return as reviewable pass/fail evidence."
      steps={autohilSteps}
    />
  );
}

export function FpgaFlow({ className }: { className?: string }) {
  return (
    <ProjectFlow
      className={className}
      title="FPGA Peripheral Verification Lab"
      caption="Register-level stimulus exercises the complete UART datapath, with cocotb regressions and waveforms capturing behavior."
      steps={fpgaSteps}
    />
  );
}

export function TelemetryFlow({ className }: { className?: string }) {
  return (
    <ProjectFlow
      className={className}
      title="Embedded Telemetry Logger"
      caption="Firmware state crosses the serial boundary as JSON packets, then becomes durable logs, statistics, and a human-readable report."
      steps={telemetrySteps}
    />
  );
}
